import React, { useState, useContext } from "react";
import NavBar from "../../components/navBar/NavBar"
import { Context } from "../../context/index"
import Header from "../../components/header/Header"
import HeadText from "../../components/headText/headText";
import { Row } from 'reactstrap';
import pdfStyles from "./pdfStyles.module.css"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDF = () => {

    const { theme } = useContext(Context)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <HeadText title="Erik's Resume" />
            <NavBar />
            <Header name="Erik's Resume" />
            <div className={pdfStyles.pdfContainer}>
                <Document
                    file="/assets/docs/WebDevResume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    className={pdfStyles.pdf}
                    >
                    <Page pageNumber={pageNumber} />
                </Document>
                    <p>Page {pageNumber} of {numPages}</p>
            </div>
        </div>
    )
}


export default PDF