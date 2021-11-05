import './style.css'

const Index = ({ name, email, document }) => {
    return (
       <div className="card">
           <div className="card-name-container">
                <div className="card-icon"></div>
                <span>{name}</span>
           </div>
           <span>{email}</span>
           <span>{document}</span>
       </div>
    )
}

export default Index