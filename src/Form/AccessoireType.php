<?php

namespace App\Form;

use App\Entity\Article;
use Symfony\Component\Form\AbstractType;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class AccessoireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id_article',TextType::class,[
                'required'   => true])
            ->add('Title',TextType::class,[
                'required'   => true])
            ->add('description',TextareaType::class,[
                'required'   => false])
             // ->add('design',TextType::class,[
            //     'required'   => true])
            ->add('imageFile',FileType::class,[
                'required'   => true])
            ->add('prix',NumberType::class,[
                'required'   => true])
            ->add('categorie',HiddenType::class,[
                'attr' => ['value' => 'Accessoire']])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}
