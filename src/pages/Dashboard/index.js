import Header from '../../components/Header'
import Card from '../../components/Card'
import './style.css'

const Index = () => {
    return (
        <>
            <Header/>
            <main className="main-content">
                <div className="cards-container">
                    <Card name={'Tiago Pires'} email={'tiagolpires@hotmail.com'} document={'12345678123'}/>   
                    <Card name={'Tiago Pires'} email={'tiagolpires@hotmail.com'} document={'12345678123'}/>   
                    <Card name={'Tiago Pires'} email={'tiagolpires@hotmail.com'} document={'12345678123'}/>   
                </div>
            </main>
        </>
    )
}

export default Index