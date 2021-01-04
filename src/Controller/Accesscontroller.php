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
use App\Form\AccessoireType;
use App\Entity\Article;



class Accesscontroller extends AbstractController 
{
    /**
     * @var ArticleRepository;
     */


    private $repository;
    private $em;
    private $session;

    public function __construct(ArticleRepository $repository, EntityManagerInterface $em,SessionInterface $session)
    {
        $this->session = $session;
        $this->repository = $repository;
        $this->em = $em;
    }
    /**
     * @route ("/acc")
     * @return \symfony\Component\HttpFoundation\Response
     */
    public function accessoire()
    {
        $Prop = $this->repository->findBy(['categorie' => 'accessoire']);


        return $this->render('Pages/article.html.twig',compact('Prop'));
    }

    /**
     * @route ("/CrudA", name="C_A", methods="GET|POST")
     * @return \symfony\Component\HttpFoundation\Response
     */
    public function AccessA()
    {
        $admin = $this->session->get('admin');
        if( $admin== "true"){
            $Prop = $this->repository->findBy(['categorie' => 'Accessoire']);

            return $this->render('Crud/accessoire/A.html.twig',compact('Prop'));
        }
        else{
            return $this->redirectToRoute('Crudindex');
        }
       
    }



    /**
     * @route ("/CrudA/add" , name="Acc_addA")
     * @param Article $article
     * @param Request $request
     * @return \symfony\Component\HttpFoundation\Response
     */

    public function add(Request $request)
    {
        $article = new Article();
        $form = $this->createForm(AccessoireType::class,$article);
        $form->handlerequest($request);

        if($form->isSubmitted() &&  $form->isValid() )
        {       
                $this->em->persist($article);
                $this->em->flush();
        return $this->redirectToRoute('C_A');

        }
        return $this->render('Crud/Accessoire/Aadd.html.twig' , [
            'article' => $article,
            'form' => $form->createView()
        ]);
    }





    /**
     * @route ("/CrudA/{id}", name="Acc_editA" , methods="GET|POST")
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

        $form = $this->createForm(AccessoireType::class, $article);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $article = $form->getData();
            $em->persist($article);
            $em->flush();
            return $this->redirectToroute('C_A');
        }

        return $this->render('Crud/Accessoire/Aedit.html.twig' , [
            'form' => $form->createView()
        ]);
    }






    /**
     * @route ("/CrudA/{id}", name="Acc_delA", methods="DELETE")
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

        return $this->redirectToroute('C_A');
    }

}
?>

