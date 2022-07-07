import { Link } from "react-router-dom";


export default function () {
    return (
        <div className="navbar dp-flex space-between shawdow-bottom al-center">
            <div className="font-weight-bold">
                Professor Allocation
            </div>
            <div className="dp-flex">
                <div className="pa-10px item-hover border-radius link">
                    <Link to="/professores" className="link">Professores</Link>
                </div>
                <div className="pa-10px item-hover border-radius">
                    <Link to="/cursos" className="link">Cursos</Link>
                </div>
                <div className="pa-10px item-hover border-radius">
                    <Link to="/departamentos" className="link">Departamentos</Link>
                </div>
                <div className="pa-10px item-hover border-radius">
                    <Link to="/alocacoes" className="link">Alocações</Link>
                </div>
            </div>
        </div>
    )
}