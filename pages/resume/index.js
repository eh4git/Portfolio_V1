import React, { useState, useContext } from "react";
import NavBar from "../../components/navBar/NavBar"
import { Context } from "../../context/index"
import Header from "../../components/header/Header"
import HeadText from "../../components/headText/headText";
import { Row } from 'reactstrap';
import pdfStyles from "./pdfStyles.module.css"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const PDF = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    
    function nextPage() {
        if(pageNumber === numPages) return
        setPageNumber(prevState => prevState + 1)
    }

    function previousPage() {
        if(pageNumber === 1) return
        setPageNumber(prevState => prevState - 1)
    }

    return (
        <div>
            <HeadText title="Erik's Resume" />
            <NavBar />
            <Header name="Erik's Resume" />
            <p>Page {pageNumber} of {numPages}</p>
            <div className={pdfStyles.pdfContainer}>
            <FontAwesomeIcon 
                icon={faChevronLeft} 
                size="2x" 
                onClick={previousPage}
            />
                <Document
                    file="/assets/docs/WebDevResume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    className={pdfStyles.pdf}
                    >
                    <Page width={1000} renderMode="svg" pageNumber={pageNumber} />
                </Document>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    size="2x" 
                    onClick={nextPage}
                />
            </div>
        </div>
    )
}


export default PDF