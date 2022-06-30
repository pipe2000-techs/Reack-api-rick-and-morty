import {useEffect, useState} from 'react'
import Character from './Character'


function NavPage({page,setPage,totalPage}) {
    return (
        <header className='d-flex justify-content-between alig-items-center'>
            <div >
                <p>Page: {page}</p>
                {
                    page > 1 ? (
                        <button className='btn btn-outline-success' onClick={() => setPage(page - 1)}>
                            Previous
                        </button>
                    ) : (
                        <button className='btn btn-outline-success' disabled>
                            Previous
                        </button>
                    )
                }
                
                {
                    page < totalPage ? (
                        <button className='btn btn-outline-success' onClick={() => setPage(page + 1)}>
                            Next
                        </button>
                    ) : (
                        <button className='btn btn-outline-success' disabled>
                            Next
                        </button>
                    )
                }
            </div>
        </header>
    )
}

function CharacterList() {

    //estados
    const [charecters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()
    

    useEffect(()=> {
        async function fetchsData() {
            const response = await fetch('https://rickandmortyapi.com/api/character?page='+page )
            const data = await response.json()
            setLoading(false)
            setCharacters(data.results);
            setTotalPage(data.info.pages);
        }

        fetchsData()
    }, [page])

    return(

        <div className='container'>

            <NavPage page={page} setPage={setPage} totalPage={totalPage}/>

            {
                loading ? (

                    <h1>Cargando...</h1> 

                ) : (

                    <div className='row'>
                        {charecters.map(charecter => {
                            return (
                                <div className='col-md-4' key={charecter.id}>
                                    <Character charecter = {charecter}/>
                                </div>
                            );
                        })}
                    </div>

                )}
            
            <NavPage page={page} setPage={setPage} totalPage={totalPage}/>         

        </div>
    )
}

export default CharacterList