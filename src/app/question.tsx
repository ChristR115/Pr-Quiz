"use client"
import React from "react";
import {Button, Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
interface IProps{
    id:number
}

const check = (id:string, comp:boolean) =>{
    const elem = document.getElementById(id)
    if (comp){
        elem!.style.background="green"
    }
    else{
        elem!.style.background="red"
    }
}
const Answer = (i:string, text:string) =>{
    return (
    <Col>
        <Button id={i} onClick={() => check(i,i==correct)} className='g-col-3 m-3 p-8' >{text}</Button>
    </Col>
    )
}
const question = '¿?'
const options = ["a. Opción 1","b. Opción 2","c. Opción 3","d. Opción 4"]
const correct = "1"
export default function Question(props:IProps){
    return(
        <Container className="rounded w-75 p-2 bg-success text-center">
        <h2 className="bg-danger w-auto text-center m-3 rounded">{"Pregunta "+props.id+": "+question}</h2> 
        <Row className="mx-0">
        {Answer("0",options[0])}
        {Answer("1",options[1])}
        </Row>
        
        <Row className="mx-0">
        {Answer("2",options[2])}
        {Answer("3",options[3])}
        </Row>
      </Container>
    )
}