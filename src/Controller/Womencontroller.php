<?php 
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ArticleRepository;
use App\Form\FemmeType;
use App\Entity\Article;

class Womencontroller extends AbstractController
{
     /**
     * @var ArticleRepository;
     */

    private $reposetory1;
    private $em;
    private $session;
    public function __construct(ArticleRepository $repository1, EntityManagerInterface $em1,SessionInterface $session)
    {
        $this->session = $session;
        $this->repository = $repository1;
        $this->em = $em1;
    }
    
    /**
     * @route ("/women")
     * @return \symfony\Component\HttpFoundation\Response
     */
    public function femme()
    {
        $Prop = $this->repository->findBy(['categorie' => 'Femme']);


        return $this->render('Pages/femme.html.twig',compact('Prop'));
    
    }
    /**
     * @route ("/CrudF", name="C_F", methods="GET|POST")
     * @return \symfony\Component\HttpFoundation\Response
     */
    public function femmeA()
    {
        $admin = $this->session->get('admin');
        if( $admin== "true"){
            $Prop = $this->repository->findBy(['categorie' => 'Femme']);

            return $this->render('Crud/women/F.html.twig',compact('Prop'));
        }
        else{
            return $this->redirectToRoute('Crudindex');
        }
       


        
    }



    /**
     * @route ("/CrudF/add" , name="Women_addF")
     * @param Article $article
     * @param Request $request
     * @return \symfony\Component\HttpFoundation\Response
     */

    public function addW(Request $request)
    {
        $article = new Article();
        $form1 = $this->createForm(FemmeType::class,$article);
        $form1->handlerequest($request);

        if($form1->isSubmitted() &&  $form1->isValid() )
        {       
                $this->em->persist($article);
                $this->em->flush();
        return $this->redirectToRoute('C_F');

        }
        return $this->render('Crud/women/Fadd.html.twig' , [
            'article' => $article,
            'form' => $form1->createView()
        ]);
    }





    /**
     * @route ("/CrudF/{id}", name="Women_editA" , methods="GET|POST")
     * @return \symfony\Component\HttpFoundation\Response
     */
    public function updateArticle(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $article = $em->getRepository('App\Entity\Article')->find($id);

        if (!$article) {
            throw $this->createNotFoundException(
                'There are no articles with the following id: ' . $id
            );
        }

        $form = $this->createForm(FemmeType::class, $article);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $article = $form->getData();
            $em->flush();
            return $this->redirectToroute('C_F');
        }

        return $this->render('Crud/women/Fedit.html.twig' , [
            'form' => $form->createView()
        ]);
    }






    /**
     * @route ("/CrudF/{id}", name="Women_delA", methods="DELETE")
     * @return \symfony\Component\HttpFoundation\RedirectResponse
     */
    public function deleteArticle($id)
    {
        $em = $this->getDoctrine()->getManager();
        $article = $em->getRepository('App\Entity\Article')->find($id);

        if (!$article) {
            throw $this->createNotFoundException(
                'There are no articles with the following id: ' . $id
            );
        }

        $em->remove($article);
        $em->flush();

        return $this->redirectToroute('C_F');
    }

}

?>

