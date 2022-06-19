import { useEffect } from "react";
import { getEntries } from "store/slices/dictionarySlice";
import { useAppDispatch, useTypedSelector } from "store";
import { RequestStatus } from "types";

export const useGetEntries = (word: string) => {
  const dispatch = useAppDispatch();
  const status = useTypedSelector((state) => state.dictionary.status);

  const data = useTypedSelector((state) => state.dictionary.entries);
  useEffect(() => {
    if (status === RequestStatus.idle) {
      dispatch(getEntries(word));
    }
  }, [dispatch]);

  const isLoading = status === RequestStatus.pending;
  const isError = status === RequestStatus.rejected;
  const isSuccess = status === RequestStatus.fulfilled;

  return { data, isLoading, isError, isSuccess };
};
