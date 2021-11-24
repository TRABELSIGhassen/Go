import React from 'react'
import { Button,Form } from 'react-bootstrap';

function body() {
    return (
        <div>
            <h5> ‏• L'élevage des canaris des couleurs est un  art du à un bon gestion des couples pour bien suivre et créer une souche au Standar</h5>

<p>▪ La gestion d'élevage n'a jamais été aussi facile ! , pour bien gérer au mieux un élevage
ce site Web permet de noter les oiseaux de l'élevage, les couples, ages , pontes , couvaison , descendances , numéro de bagues 
pour le garder comme une sorte de mémoire historique et de référence pour les années suivantes , avec comme but :
 Elever des oiseaux le plus proche possible du standard </p>
 <p>  ▪  Comment je Peut inscrire Pour gérer mon Elévage ?  </p>
<p className="p1">compléter le Formulaire pour bien utilitsé notre Site web  ✒️</p> 

<div className="login">
  

<Form>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>• Nom d'élveur</Form.Label>
    <Form.Control type="email" placeholder="Enter your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>• addresse Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">

      We'll never share your email with anyone else.
    
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>• Mot de passe </Form.Label>
    <Form.Control type="password" placeholder="Password" />

    <Form.Text className="text-muted">
keep it secret</Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" classname="submit">
    Submit
  </Button>
</Form> 
</div>
        </div>
    )
}

export default body
