import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import  NewsItem  from '../components/NewsItem';
let TopNews = ({ channels, loading }) => {
    let topNews = '';
    if(channels){
      console.log("Response Handle by reducers:-"+channels);
      topNews = channels.map((article, index) =>(
       <div key={`${index}`} className='row'>
          <NewsItem article={channels[index]} />
          <div className="container">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th className="table-hidden-td">EMP ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                        <tr key={article.id}>
                                            <td article="table-hidden-td">{article.id}</td>
                                            <td>{article.firstName}</td>
                                            <td>{article.lastName}</td>
                                            <td>{article.address}</td>
                                            <td>{article.salary}</td>
                                        </tr>                               
                            }
                        </tbody>                     
                    </table>
                </div> 
       </div>
      )
     )
    }
   if(loading){
    topNews = <h3 className="loading-indicator">Loading ...</h3>
  }

  return (
   <div>
     {topNews}
   </div>
  )
}

const mapStateToProps = (state) => ({
  channels: state.json,
  loading: state.loading
})
TopNews = connect(mapStateToProps,null)(TopNews)
export default TopNews;