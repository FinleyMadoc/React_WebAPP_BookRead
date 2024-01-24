import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispath, AppState } from "@/store/store";

export const useAppDispatch = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;