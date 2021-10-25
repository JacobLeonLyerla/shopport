import React from "react";
import { Route } from "react-router";
import CollectionOverview from "../../components/collections-overview/collection-overview.componet";
import CollectionPage from "../collection/collection.component";
const ShopPage = ({match})=> (
      <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionOverview} />
       <Route path={`${match.path}/:collectionId`}  component={CollectionPage}/>
      </div>
    );

export default ShopPage;
