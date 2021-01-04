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
use App\Form\HommeType;
use App\Entity\Article;



class Mencontroller extends AbstractController 
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
     * @route ("/men")
     * @return \symfony\Component\HttpFoundation\Response
     */
    public function homme()
    {
        $Prop = $this->repository->findBy(['categorie' => 'Homme']);


        return $this->render('Pages/homme.html.twig',compact('Prop'));
    }

    /**
     * @route ("/CrudH", name="C_H", methods="GET|POST")
     * @return \symfony\Component\HttpFoundation\Response
     */
    public function hommeA()
    {
        $admin = $this->session->get('admin');
        if( $admin== "true"){
            $Prop = $this->repository->findBy(['categorie' => 'Homme']);

            return $this->render('Crud/men/H.html.twig',compact('Prop'));
        }
        else{
            return $this->redirectToRoute('Crudindex');
        }
       
    }



    /**
     * @route ("/CrudH/add" , name="Men_addA")
     * @param Article $article
     * @param Request $request
     * @return \symfony\Component\HttpFoundation\Response
     */

    public function addM(Request $request)
    {
        $article = new Article();
        $form = $this->createForm(HommeType::class,$article);
        $form->handlerequest($request);

        if($form->isSubmitted() &&  $form->isValid() )
        {       
                $this->em->persist($article);
                $this->em->flush();
        return $this->redirectToRoute('C_H');

        }
        return $this->render('Crud/men/Hadd.html.twig' , [
            'article' => $article,
            'form' => $form->createView()
        ]);
    }





    /**
     * @route ("/CrudH/{id}", name="Men_editA" , methods="GET|POST")
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

        $form = $this->createForm(HommeType::class, $article);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $article = $form->getData();
            $em->flush();
            return $this->redirectToroute('C_H');
        }

        return $this->render('Crud/men/Hedit.html.twig' , [
            'form' => $form->createView()
        ]);
    }






    /**
     * @route ("/CrudH/{id}", name="Men_delA", methods="DELETE")
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

        return $this->redirectToroute('C_H');
    }

}
?>

