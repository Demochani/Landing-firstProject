import React from "react";
import { ReactReduxContext } from "react-redux";
import "./styles/App.css";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <form className="filter-form" autoComplete="off">
      <input
        value={filter}
        placeholder={"Search..."}
        // onSubmit={searchSubmit}
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  );
};

export default PostFilter;

// import React from "react";
// import "./styles/App.css";
// import { useSearchParams } from "react-router-dom";

// const PostFilter = () => {
//   const [filter, setFilter] = useSearchParams();
//   return (
//     <form
//     className="filter-form"
//     autoComplete="off"
//     onSubmit={
//       ((e) => {
//         e.preventDefault();
//         const query = e.target.search.value;
//         setFilter({ posts: query });
//       })
//     }>
//       <input
//         value={filter.get("post") || ""}
//         placeholder={"Search..."}

//       />
//     </form>
//   );
// };

// export default PostFilter;
