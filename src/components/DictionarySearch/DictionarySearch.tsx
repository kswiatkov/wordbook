import { useForm } from "react-hook-form";
import { useLazyGetDefinitionsQuery } from "store/services/dictionary";
import { useAddWordbookEntryMutation } from "store/services/wordbook";
import { Text, Button, Input, HStack, VStack, Box } from "components/ui";
import { useAppDispatch } from "store";
import {
  getEntries,
  useDictionarySelector,
} from "store/slices/dictionarySlice";

const DictionarySearch = () => {
  const dispatch = useAppDispatch();
  const { data } = useDictionarySelector();
  const { register, handleSubmit, setValue } = useForm<{
    searchValue: string;
  }>();

  const [addWordbookEntry] = useAddWordbookEntryMutation();

  const onSubmit = handleSubmit(({ searchValue }) =>
    dispatch(getEntries(searchValue))
  );

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <VStack>
          <HStack>
            <Input {...register("searchValue")} />
            <Button type="submit">Search</Button>
          </HStack>
          {data?.map(({ meanings, word }) =>
            meanings
              .slice(0, 2)
              .map(({ definitions, partOfSpeech, synonyms }) => (
                <div key={definitions[0].definition}>
                  <Text>{partOfSpeech}</Text>
                  <HStack>
                    <div>
                      <Text>{definitions[0].definition}</Text>
                      {definitions[0].example && (
                        <Text darker>example: {definitions[0].example}</Text>
                      )}
                    </div>
                    <Button
                      onClick={() =>
                        addWordbookEntry({
                          word,
                          definition: definitions[0].definition,
                        })
                      }
                    >
                      save
                    </Button>
                  </HStack>
                  <HStack wrap="wrap">
                    {[...new Set(synonyms)].map((s) => (
                      <Button
                        onClick={() => {
                          setValue("searchValue", s);
                          onSubmit();
                        }}
                        key={s}
                      >
                        {s}
                      </Button>
                    ))}
                  </HStack>
                </div>
              ))
          )}
        </VStack>
      </form>
    </Box>
  );
};

export default DictionarySearch;
