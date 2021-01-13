import "./index.css";

import { AppDispatch, AppState } from "src/store";
import { Box, Button, List, ListItem, Typography } from "@material-ui/core";
import React, { FC, useEffect } from "react";

import { Page } from "src/components/Page";
import { connect } from "react-redux";
import { fetchData } from "src/actions/data";
import { getFilteredItems } from "src/selectors/items";
import { getSelectedCategory } from "src/getters/settings";
import { getSortedCategories } from "src/selectors/categories";
import { setSelectedCategory } from "src/actions/settings";

interface StateProps {
  categories: API.Category[];
  items: API.Item[];
  selectedCategory: API.Category | null;
}

interface DispatchProps {
  fetchData: () => void;
  selectCategory: (category: API.Category | null) => void;
}

type Props = StateProps & DispatchProps;

const App: FC<Props> = ({
  categories,
  items,
  selectedCategory,
  fetchData,
  selectCategory,
}) => {
  useEffect(fetchData, [fetchData]);

  const handleCategoryButtonClick = (category: API.Category) => {
    if (category === selectedCategory) {
      selectCategory(null);
    } else {
      selectCategory(category);
    }
  };

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
            <ListItem key={category}>
              <Button
                onClick={() => handleCategoryButtonClick(category)}
                variant={
                  category === selectedCategory ? "contained" : undefined
                }
                color="primary"
              >
                {category}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Page>
  );
};

export const mapStateToProps = (state: AppState): StateProps => {
  return {
    categories: getSortedCategories(state),
    items: getFilteredItems(state),
    selectedCategory: getSelectedCategory(state),
  };
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  fetchData() {
    dispatch(fetchData());
  },
  selectCategory(category) {
    dispatch(setSelectedCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
