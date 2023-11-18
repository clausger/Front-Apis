
export const VerReclamosID = () => {
    return ( <div>
        
        <div>
            <div>
                <Link to='/home'>
                    <button>Back</button>
                </Link>
            </div>

        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>

        <button onClick={handleBuscar}>Buscar</button>
        </div>

    </div> );
}