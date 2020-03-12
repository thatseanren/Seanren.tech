import React, { Fragment } from "react"
import './Section.css'
import "../IMG_1186.jpeg"
const contentObj = {
    'bio-section': {
        "title": 'KNOW ME',
        'sub-title': [],
        "content": [` I am an international student from   University of Technology, Sydney.  
        My major is Becholar of Science in Information Technology.
        I focus on both front-end development and back-end development, creating brilliant user experience using Node.JS, React.js, Express.js along with morden advanced technologies.
        My goal is to deliver unique visual experiences in the form of web application,
        to users arround the world. 
        
        I not only continue to learn and adapt to new technologies but also seek new ways of thinking that allow me to design, code in a sustainablly creative way.`]
    },
    'e-section': {
        "title": 'Education',
        "sub-title": [`University of Technology, Sydney`],
        "picture": ["../IMG_1186.jpeg"],
        "content": [`2016-2019 \nI completed my Bechelor of Science in Information Technology in University of Technology, Sydney. I participated in a first-year seminar, mainly focused on facilitating international student to better understand the structure and purpose in western educational system.`]
    },
    "w-section": {
        "title": ['Working Experience'],
        'sub-title': [],
        "content": [`I have applied for and been accepted as a graduate intern technical support at computer vision laboratory at university. During that position, I mainly focused on researching the approach of measuring sheep and pig body size and weight based on embedded machine vision, I wrote scripts testing and training model to provide result and further evidence to support senior thesis research.`]
    },
    "v-section": {
        "title": `My Value`,
        "sub-title": ["Love", "Respect", "Dterminated"],
        "content": [`Do what I love, Love what I do, My passionate is to finding a way to love my job, integrate my personality with my responsibility. Use my knowledge deliver the best to my job`, `Respect the knowledge, Valuing the diversity of knowledge, achieving a comprehensive knowledge base to serve my job, obsorbing, discussing and sharing every valuable piece of knowledge to people who need.`, `Valuing every product, demonstrating a "can-be-better" attitude and mainteining a keep-envolving production system.`]
    }
}

function Loop(props) {
    const section = []
    const { content, subtitle } = props;
    if (subtitle.length !== 0) {
        return <h3> {content}</h3>
    } else {
        for (var i = 0; i <= content.length; i++) {
            section.push(<Fragment>
                <h5>{subtitle[i]}</h5>
                <h3>{content[i]}</h3>
            </Fragment>)
        }
        return section
    }
}
export default function SectionFill(props) {
    const title = contentObj[props.section].title
    const content = contentObj[props.section].content
    const subtitle = contentObj[props.section]["sub-title"]
    return (
        <Fragment>
            <h2 className="section-title">
                {title}
            </h2>
            <Loop content={content} subtitle={subtitle}>
            </Loop>
        </Fragment>
    )
}
