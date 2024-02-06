"use client"
import React from "react";
import {Button, Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

interface IOption{
    op:string[],
    index:number
}
interface IProps{
    questions:string[],
    options:IOption[]
}


export default function Question(props:IProps){

    const check = (id:string, comp:boolean) =>{
        const elem = document.getElementById(id)
        if (comp){
            elem!.style.background="green"
            setStateNext(false)
        }
        else{
            elem!.style.background="red"
        }
    }
    const nextQuestion = () =>{
        for (let i=0;i<4;i++){
            document.getElementById(i.toString())!.style.background="grey"
        }
        setStateNext(true); setIndex(index+1); setOptions(props.options[index])
    }

    const Answer = (i:number, text:string) =>{
        let iString = i.toString()
        return (
        <Col>
            <Button id={iString} onClick={() => check(iString.toString(),i==options.index)} className='g-col-3 m-3 p-8 w-75 h-75' >{text}</Button>
        </Col>
        )
    }
    const [index, setIndex] = React.useState(0)
    const [stateNext, setStateNext] = React.useState(true)
    const [options, setOptions] = React.useState(props.options[0])

    return(
        <Container className="rounded w-75 p-2 bg-primary text-center">
        <h2 className="w-auto text-center m-3 rounded">{"Pregunta "+(index+1)+": "+props.questions[index]}</h2> 
        <Row className="mx-0">
        {Answer(0,options.op[0])}
        {Answer(1,options.op[1])}
        </Row>
        
        <Row className="mx-0">
        {Answer(2,options.op[2])}
        {Answer(3,options.op[3])}
        </Row>
        <Row>
            <div>
                <Button className="btn-light float-right m-3" onClick={nextQuestion} disabled={stateNext}>Siguiente</Button>
            </div>
        </Row>

      </Container>
    )
}