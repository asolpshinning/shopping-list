'use client'
import Box from '@mui/material/Box';
import { ItemModal, DeleteItemModal, Spinner, EmptyList, Header, ShoppingList } from '@/components';
import useShoppingData from '@/hooks/useShoppingData';
import useShoppingState from '@/hooks/useShoppingState';
import { Button, Typography } from '@mui/material';

const Home = () => {

  const {
    shoppingData,
    handleItemSaveData,
    handleConfirmDeleteData,
    handleMarkItemPurchased } = useShoppingData()

  const {
    shoppingState,
    handleClickAddItem,
    handleClickEdit,
    handleClickDelete,
    handleItemFieldChange,
    handleItemModalClose,
    handleDeleteModalClose } = useShoppingState()

  const handleItemSave = () => {
    handleItemSaveData(shoppingState);
    handleItemModalClose();
  }

  const handleConfirmDelete = () => {
    handleConfirmDeleteData(shoppingState);
    handleDeleteModalClose();
  }

  return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex', alignIntems: 'center', justifyContent: 'center' }}>
        <EmptyList reveal={(!shoppingData.items || (shoppingData.items && shoppingData.items.length === 0)) && !shoppingData.loading} onClickAddItem={() => handleClickAddItem(shoppingData)}>
          <Button variant='contained' onClick={() => handleClickAddItem(shoppingData)} sx={{ marginTop: 2 }}>
            <Typography sx={{ textTransform: "none" }}>
              Add Your First Item
            </Typography>
          </Button>
        </EmptyList>
        <Spinner loading={shoppingData.loading} />
        <ShoppingList
          reveal={shoppingData.items && !shoppingData.loading && shoppingData.items.length > 0}
          data={shoppingData}
          onClickAddItem={handleClickAddItem}
          onClickEdit={handleClickEdit}
          onMarkedAsPurchased={handleMarkItemPurchased}
          onClickDelete={handleClickDelete}
        />
        <ItemModal
          actionType={shoppingState.itemActionType}
          reveal={shoppingState.isItemModalOpen}
          onExit={handleItemModalClose}
          item={shoppingState.currentItem}
          validations={shoppingState.currentItemValidations}
          onFieldChange={handleItemFieldChange}
          onSave={handleItemSave}
        />
        <DeleteItemModal
          open={shoppingState.isDeleteModalOpen}
          onExit={handleDeleteModalClose}
          onConfirm={handleConfirmDelete}
        />
      </Box>
    </Box>
  );
};

export default Home;