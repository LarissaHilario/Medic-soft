

const RelationData =({title})=>{
    return(
        <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-title text-sm">{title}</div>
    <div className="stat-value text-sm">31K</div>
  
  </div>
  
  <div className="stat">
    <div className="stat-title text-sm">{title}</div>
    <div className="stat-value text-sm">4,200</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-title text-sm">{title}</div>
    <div className="stat-value text-sm">1,200</div>
  </div>
  
</div>
    )
}

export default RelationData