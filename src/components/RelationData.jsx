

const RelationData =({title, title2, title3, data, data2, data3, withdata3=false})=>{
    return(
        <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-title text-sm">{title}</div>
    <div className="stat-value text-sm">{data}</div>
  
  </div>
  
  <div className="stat">
    <div className="stat-title text-sm">{title2}</div>
    <div className="stat-value text-sm">{data2}</div>
    
  </div>
{ withdata3 &&
  <div className="stat">
    <div className="stat-title text-sm">{title3}</div>
    <div className="stat-value text-sm">{data3}</div>
  </div>}
  
</div>
    )
}

export default RelationData