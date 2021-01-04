<?php

namespace App\Entity;

use App\Repository\LigneRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LigneRepository::class)
 */
class Ligne
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_comm;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_article;
    

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $quantite=1;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $prix_unit;
    
    private $narticle;
    private $img;
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdComm(): ?int
    {
        return $this->id_comm;
    }

    public function setIdComm(int $id_comm): self
    {
        $this->id_comm = $id_comm;

        return $this;
    }

    public function getIdArticle(): ?int
    {
        return $this->id_article;
    }

    public function setIdArticle(int $id_article): self
    {
        $this->id_article = $id_article;

        return $this;
    }
    public function getNarticle(): ?string
    {
        return $this->narticle;
    }

    public function setNarticle(string $Narticle): self
    {
        $this->narticle = $Narticle;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): self
    {
        $this->img = $img;

        return $this;
    }
    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(?int $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getPrixUnit(): ?float
    {
        return $this->prix_unit;
    }

    public function setPrixUnit(?float $prix_unit): self
    {
        $this->prix_unit = $prix_unit;

        return $this;
    }
}
