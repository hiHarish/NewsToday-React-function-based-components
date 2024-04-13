import React from 'react'

export default function NewsItem(props) {
    let {title, mydesc, imgurl, newsurl}=props;
     let mydesc1=mydesc.slice(0,100)
    return (
      <>
        <div className="card bg-dark"  style={{ padding:'0px',color:'white',width: 18+"rem"}}>
          <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <button type="button" className="btn btn-link-dark">
            <a href={newsurl} target='_blank' rel="noreferrer">
              <h5>{title}</h5>
            </a>
          </button>
          <p className="card-text">{mydesc1}...</p>
        </div>
        </div>
      </>
        
    )
  }
