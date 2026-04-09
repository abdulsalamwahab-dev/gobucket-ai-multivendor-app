import StoreLayoutWrapper from "./StoreLayoutWrapper";

export const metadata = {
  title: "goBucket. - Store Dashboard",
  description: "goBucket. - Store Dashboard",
};

export default function RootStoreLayout({ children }) {
  return <StoreLayoutWrapper>{children}</StoreLayoutWrapper>;
}