import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLazyGetDefinitionsQuery } from "store/services/dictionary";
import { useAddWordbookEntryMutation } from "store/services/wordbook";
import { Text, Button, Input, HStack, VStack } from "components/ui";

const DictionarySearch = () => {
  const { register, handleSubmit } = useForm<{ searchValue: string }>();
  const [triggerGetDefinitions, { data: dictionaryResults }] =
    useLazyGetDefinitionsQuery();
  const [addWordbookEntry] = useAddWordbookEntryMutation();

  return (
    <form
      onSubmit={handleSubmit(({ searchValue }) =>
        triggerGetDefinitions(searchValue)
      )}
    >
      <VStack>
        <HStack>
          <Input {...register("searchValue")} />
          <Button type="submit">Search</Button>
        </HStack>
        {dictionaryResults?.map(({ meanings, word }) =>
          meanings
            .slice(0, 2)
            .map(({ definitions, partOfSpeech, synonyms }) => (
              <div key={definitions[0].definition}>
                <Text>{partOfSpeech}</Text>
                <Text>{definitions[0].definition}</Text>
                {definitions[0].example && (
                  <Text darker>example: {definitions[0].example}</Text>
                )}
                <HStack>
                  {synonyms.map((s) => (
                    <Button key={s}>{s}</Button>
                  ))}
                </HStack>
              </div>
            ))
        )}
      </VStack>
    </form>
  );
};

export default DictionarySearch;
