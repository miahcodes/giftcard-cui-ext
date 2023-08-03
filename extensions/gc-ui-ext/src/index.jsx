import React from 'react';
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
  useApplyDiscountCodeChange,
  Button,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Reductions::RenderAfter', () => <App />);

function App() {
  const _applyDiscountCodeChange = useApplyDiscountCodeChange();
  // const {extensionPoint} = useExtensionApi();
  const handlePress = async () => {
    await fetch('https://jjoa-test-shop-01.myshopify.com/pages/test')
    .then((response) => response.json())
    .then(({data: { code }}) => {
        _applyDiscountCodeChange({
          "type":"addDiscountCode",
          "code":code
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <Button
      onPress={handlePress}
    >
      Redeem Points
    </Button>
  );
}
