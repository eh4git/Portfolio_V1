import React, { useContext } from "react"
import ThemeSlider from "../../components/themeSlider/ThemeSlider";
import { Context } from "../../context/index"
import headerStyle from "./headerStyle.module.css"

const Header = props => {

    const { theme } = useContext(Context)

    let headerContainerCN;
    let headerTextCN;
    theme === 'light' ? (
        headerContainerCN = headerStyle.lightHeaderContainer,
        headerTextCN = headerStyle.lightHeaderText
    )
        : theme === 'dark' ? (
            headerContainerCN = headerStyle.darkHeaderContainer,
            headerTextCN = headerStyle.darkHeaderText
        )
            : theme === 'refined' ? (
                headerContainerCN = headerStyle.refinedHeaderContainer,
                headerTextCN = headerStyle.refinedHeaderText
            )
                : (
                    headerContainerCN = headerStyle.relaxedHeaderContainer,
                    headerTextCN = headerStyle.relaxedHeaderText
                )

    return (
        <div className={`${headerStyle.headerContainer} ${headerContainerCN}`}>
            <h1 className={`${headerStyle.headerText} ${headerTextCN}`}>
                {props.name}
            </h1>
            <ThemeSlider />
        </div>
    )
}

export default Header