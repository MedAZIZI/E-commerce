<?php

namespace App\Form;

use App\Entity\Client;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
class ClientType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ->add('id_client')
            ->add('prenom', TextType::class, [
                'label' => 'Prénom :',
                'attr' => [
                    'class' => 'input',
                    'style' => 'margin-left:10px'
                    ]
            ])
            ->add('nom', TextType::class, [
                'label' => 'nom :__',
                'attr' => [
                    'class' => 'input',
                    'style' => 'margin-left:10px'
                    ]
            ])
            ->add('age', TextType::class, [
                'label' => 'Age :___',
                'attr' => [
                    'class' => 'input',
                    'style' => 'margin-left:10px'
                    ]
            ])
            ->add('adresse', TextAreaType::class, [
                'label' => ' ',
                'attr' => [
                    'class' => 'input',
                    // 'cols' => '30',
                    // 'rows' => '45',
                    'style' => 'margin-left:10px;resize:none;width:350px; height:120px;'
                    ]
            ])
            ->add('ville', TextType::class, [
                'label' => 'Ville :__',
                'attr' => [
                    'class' => 'input',
                    'style' => 'margin-left:10px'
                    ]
            ])
            ->add('mail', EmailType::class, [
                'label' => 'Email :__',
                'attr' => [
                    'class' => 'input',
                    'style' => 'margin-left:10px'
                    ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Client::class,
        ]);
    }
}
