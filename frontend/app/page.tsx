'use client'
import Box from '@mui/material/Box';
import ShoppingList from '../components/ShoppingList';
import { ItemModal, DeleteItemModal, Spinner, EmptyList } from '.././components';
import useShoppingData from '@/hooks/useShoppingData';
import useShoppingFunctions from '@/hooks/useShoppingFunctions';
import { Button } from '@mui/material';

const Home = () => {

  const { shoppingData, handleItemSaveData, handleConfirmDeleteData, handleMarkItemPurchased } = useShoppingData()
  const {
    shoppingState,
    handleClickAddItem,
    handleClickEdit,
    handleClickDelete,
    handleItemFieldUpdate,
    handleItemModalClose,
    handleDeleteModalClose,
  } = useShoppingFunctions()

  const handleItemSave = () => {
    handleItemSaveData(shoppingState);
    handleItemModalClose();
  }

  const handleConfirmDelete = () => {
    handleConfirmDeleteData(shoppingState);
    handleDeleteModalClose();
  }

  return (
    <Box className="shopping-list-container">
      <EmptyList reveal={!shoppingData.items && !shoppingData.loading} onClickAddItem={() => handleClickAddItem(shoppingData)}>
        <Button onClick={() => handleClickAddItem(shoppingData)}>Add Item</Button>
      </EmptyList>
      <Spinner loading={shoppingData.loading} />
      <ShoppingList
        reveal={shoppingData.items && !shoppingData.loading}
        data={shoppingData}
        state={shoppingState}
        onClickAddItem={handleClickAddItem}
        onClickEdit={handleClickEdit}
        onMarkedAsPurchased={handleMarkItemPurchased}
        onClickDelete={handleClickDelete}
      />
      <ItemModal
        actionType={shoppingState.itemActionType}
        reveal={shoppingState.isItemModalOpen}
        onExit={handleDeleteModalClose}
        item={shoppingState.currentItem}
        validations={shoppingState.currentItemValidations}
        onFieldChange={handleItemFieldUpdate}
        onSave={handleItemSave}
      />
      <DeleteItemModal
        open={shoppingState.isDeleteModalOpen}
        onExit={handleDeleteModalClose}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default Home;