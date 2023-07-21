import '../App.css'

const Morewords = () => {
    return (
      <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{ minHeight: 'calc(100vh - 58px)',flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
 
       <button className='custom-button'><h2> Aléatoire </h2></button>
       <button className='custom-button'><h2> Par thème </h2></button>
       <button className='custom-button'><h2> Chercher </h2></button>
       </div>
       </div>
    )
}
export default Morewords;