import React from "react";

const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input
                    onChange={props.handleSearch}
                    type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchArea;


// function SearchArea() {
//     return (
//         <div className="searchArea">
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="search">Search:</label>
//                     <input
//                         onChange={props.handleInputChange}
//                         value={props.value}
//                         name="search"
//                         type="text"
//                         className="form-control"
//                         placeholder="Search For a Book"
//                         id="search"
//                     />
//                     <br />
//                     <button onClick={props.handleFormSubmit} className="btn btn-primary">
//                         Search
//         </button>
//                 </div>
//             </form>
//         </div>

//     );
// }
