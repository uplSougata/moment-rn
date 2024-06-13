export interface NavigationTypes {
    navigate: (item: string, params?: any) => void;
    replace: (item: string, params?: any) => void;
    goBack: () => void;

}