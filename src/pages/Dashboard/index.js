import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import Card from '../../components/Card'
import './style.css'
import { useQuery } from "@apollo/client"
import { GET_STUDENTS } from '../../GraphQL/Queries'

  
  const Index = () => {
    const { data } = useQuery(GET_STUDENTS)
    const [students, setStudents] = useState([])

    useEffect(() => {
      if (data) setStudents(data.students)
    }, [data]);

    return (
        <>
            <Header/>
            <main className="main-content">
                <div className="cards-container">
                    {students.length > 0 && students.map(student => (
                        <Card name={student.name} email={student.email} document={student.document} key={student.id}/>   
                    ))}
                    
                    {students.length === 0 && 
                        <span>Nenhum estudante cadastrado</span>
                    }
                </div>
            </main>
        </>
    )
}

export default Index