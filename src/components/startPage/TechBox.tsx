import TechColors from '../../utils/TechColors'
import '../../styles/start.css'


interface TechProps {
    technology: string
}

const TechBox: React.FC<TechProps> = ({ technology }) => {
    return (
        <div className="tech-box" style={{ ["--tech-color" as string]: TechColors[technology] }}>
            {technology}
        </div>
    )
}

export default TechBox