import {FrontendStatic} from "src/helpers"


export default function Analytics () {
    const src = FrontendStatic.ANALYSIS_URL
    return (
        <>
            {src && FrontendStatic.isDev && <script src={src} />}
        </>
    )
}
