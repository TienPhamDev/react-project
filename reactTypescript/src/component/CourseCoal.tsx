import { ReactNode } from "react"

interface CourseCoalProps {
    title : string
    children: ReactNode
}
const CourseCoal = ({title,children} : CourseCoalProps) => {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>

        <button>Delete</button>
    </article>
}
export default CourseCoal;