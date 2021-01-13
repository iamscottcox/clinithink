import "./index.css";

import { AppDispatch, AppState } from "src/store";
import { Box, List, ListItem, Typography } from "@material-ui/core";
import React, { FC, useEffect } from "react";

import { Page } from "src/components/Page";
import { connect } from "react-redux";
import { fetchData } from "src/actions/data";
import { getCategories } from "src/getters/categories";
import { getItems } from "src/selectors/items";

interface StateProps {
  categories: API.Category[];
  items: API.Item[];
}

interface DispatchProps {
  fetchData: () => void;
}

type Props = StateProps & DispatchProps;

const App: FC<Props> = ({ categories, items, fetchData }) => {
  useEffect(fetchData, [fetchData]);

  return (
    <Page>
      <Typography variant="h1" align="center">
        Clinithink Test
      </Typography>
      <Box>
        <Typography variant="h4">Items</Typography>
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h4">Categories</Typography>
        <List>
          {categories.map((category) => (
            <ListItem key={category}>{category}</ListItem>
          ))}
        </List>
      </Box>
    </Page>
  );
};

export const mapStateToProps = (state: AppState): StateProps => {
  return {
    categories: getCategories(state),
    items: getItems(state),
  };
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
