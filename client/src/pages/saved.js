import React from "react";
import Header from "../components/Header/Header";
import Saved from "../components/Saved/Saved";

// Page for displaying the user's saved books.
function SavedPage() {
    return (
        <div>
            <Header />
            <Saved />
        </div>
    )
}

export default SavedPage;