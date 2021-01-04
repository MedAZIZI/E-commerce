<?php 
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Validator\Constraints\DateTimeValidator;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ArticleRepository;
use App\Form\HommeType;
use App\Repository\LigneRepository;
use App\Form\LigneType;
use App\Form\ClientType;
use App\Entity\Ligne;
use App\Entity\Client;
use App\Entity\Commande;


class HomeController extends AbstractController
{
    /**
     * @var ArticleRepository;
     * @var LigneRepository;
     */
    private $reposetory;
    private $reposetory1;

    private $em;
    private $session;
    public  $cmd;
    public $cliient;
    public function __construct(ArticleRepository $repository,LigneRepository $reposetory1, EntityManagerInterface $em,SessionInterface $session)
    {
        $this->session = $session;
        $this->repository = $repository;
        $this->repository1 = $reposetory1;
        $this->em = $em;
        
        $idc = $this->session->get('user',$this->cmd);
        if(!$idc){
            $this->cmd = random_int ( 0 , 1000 );
            $this->session->set('user',$this->cmd);

        } 


        $this->cliient = random_int ( 0 , 1000 );
        $temp =  $em->getRepository('App\Entity\Client')->findOneBy(['id_client' => $this->cliient]);
        if($temp ){
            $this->cliient = random_int ( 0 , 1000 );
        }
    }    

   
    /**
    * @Route("/", name="home")
    */  
    public function home()
    {
                
        
       


        $MEN = $this->repository->findBy(['categorie' => 'Homme'],['id' => 'desc']);
        $WOMEN = $this->repository->findBy(['categorie' => 'Femme'],['id' => 'desc']);
        $ACC = $this->repository->findBy(['categorie' => 'Accessoire'],['id' => 'desc']);


        return $this->render('Pages\accueil.html.twig',compact('MEN','WOMEN','ACC'));
    }
        

    /**
    * @Route("/Produit/{id}", name="prod")
    * @param Ligne $ligne
    * @param Request $request
    */  
    public function produit(Request $request,$id)
    {
        $em = $this->getDoctrine()->getManager();
        $article = $em->getRepository('App\Entity\Article')->find($id);

        if (!$article) {
            throw $this->createNotFoundException(
                'There are no articles with the following id: ' . $id
            );
        }

        $ligne = new Ligne();
        $form1 = $this->createForm(LigneType::class,$ligne);
        $form1->handlerequest($request);

        if($form1->isSubmitted() &&  $form1->isValid() )
        {       
                $admin = $this->session->get('user');
                $ligne->setIdComm($admin);
                $ligne->setIdArticle($id);
                $ligne->setPrixUnit($article->getPrix());

                $this->em->persist($ligne);
                $this->em->flush();
        return $this->redirectToRoute('home');

        }
        return $this->render('Pages\produit.html.twig' , [
            'article' => $article,
            'form1' => $form1->createView()
        ]);
    }

    /**
    * @Route("/Crud", name="Crudindex")
    */  
    public function Crudindex()
    {
        // $form1 = $this->;
        // if($form->isSubmitted() &&  $form->isValid() ){
                  $this->session->set('admin', 'true');
  
        // }
        return $this->render('Crud\Crud.html.twig');
        
    }

    public function addToPanier( ){
         
               
    }
    
    /**
    * @Route("/panier", name="panier")
    * @param Ligne $ligne
    * @param Request $request
    */ 
    public function Panier(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $id = $this->session->get('user');
        $tot = 0;
        $command = $em->getRepository('App\Entity\Ligne')->findBy(["id_comm" =>$id]);
        foreach($command as $element):
           
            $artc =  $em->getRepository('App\Entity\article')->findOneBy(['id' => $element->getIdArticle() ]);
            $element->setNarticle( $artc->getTitle());
            $element->setImg( $artc->getDesign());
            $tot += ($element->getQuantite() * $element->getPrixUnit());
        endforeach;
        
        if (!$command) {
            echo"<script>alert('Vous n'avez toujours pas choisis d'article !')</script>";
            

            // throw $this->createNotFoundException(
            //     'There are no articles with the following id: ' . $id
            // );
            return $this->redirectToRoute('home');
        }
        $client = new Client();
        $commande = new Commande();
        $form = $this->createForm(ClientType::class,$client);
        $form->handlerequest($request);

        if($form->isSubmitted() &&  $form->isValid() )
        {       
                $client->setIdClient($this->cliient);
                $commande->setIdComm($id);
                $commande->setIdClient($this->cliient);
                $commande->setDate( new \DateTime('NOW'));
                $this->em->persist($client);
                $this->em->persist($commande);
                $this->em->flush();
                session_destroy();
        return $this->redirectToRoute('home');

        }
        return $this->render('Pages/panier.html.twig', [
            'command' => $command,
            'tot' => $tot,
            'form' => $form->createView()
        ]);
        
    }
     /**
     * @route ("/panier/{id}", name="cmd_delA", methods="DELETE")
     * @return \symfony\Component\HttpFoundation\RedirectResponse
     */
    public function deletecmd($id)
    {
        $em = $this->getDoctrine()->getManager();
        $ligne = $em->getRepository('App\Entity\ligne')->find($id);

        if (!$ligne) {
            throw $this->createNotFoundException(
                'There are no articles with the following id: ' . $id
            );
        }

        $em->remove($ligne);
        $em->flush();

        return $this->redirectToroute('panier');
    }


 
}


?>
