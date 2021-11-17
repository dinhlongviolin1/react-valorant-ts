export interface AppProps {
    setstoreData: React.Dispatch<React.SetStateAction<StoreData>>;
    storeData?: StoreData;
}

export interface BundleData {
    duration: number;
    imageUrl: string;
    name: string;
}

export interface SkinData {
    contentTierColor: string;
    contentTierImg: string;
    imgUrl: string;
    name: string;
    price: number;
}
export interface StoreData {
    RP?: number;
    VP?: number;
    bundleData?: BundleData[];
    dailyReset?: number;
    skinsData?: SkinData[];
}
