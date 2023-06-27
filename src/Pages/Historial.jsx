import Header from "../components/Header/Header"
import Table from "../components/Table"

const Historial = () => {
    return (
        <>
            <Header title={'Historial'}
            description={
                <Table/>
            }
            ></Header>                
        </>
    )
}

export default Historial