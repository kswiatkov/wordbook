import { useGetWordbookQuery } from "store/services/wordbook";
import { Box, Text } from "components/ui";

const Wordbook = () => {
  const { data: wordbookData } = useGetWordbookQuery();
  return (
    <Box>
      {wordbookData?.map(({ definition, id, word }) => (
        <Box key={id}>
          <Text>{definition}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Wordbook;
