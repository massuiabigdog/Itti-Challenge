import React from "react";
import { Box, HStack, Icon, Input, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
    searchInput: {
        title: string;
        year: string;
    };
    setSearchInput: (value: any) => void;
 }
const SearchBar: React.FC<SearchBarProps> = ({ searchInput, setSearchInput }) => {
    return (
        <HStack p={2} width="100%" bg='violet.200'>
            <VStack flex={1} mr={4} space={2}>
                <Box>Movie title</Box>
                <Input
                    placeholder="Title"
                    bg="#fff"
                    width="100%"
                    borderRadius={4}
                    py={3}
                    px={2}
                    fontSize={14}
                    _web={{
                        _focus: {
                            borderColor: 'muted.300',
                        }
                    }}
                    InputLeftElement={<Icon size="md" m={2} color="gray.400" as={<Ionicons name="search" />} />}
                    value={searchInput?.title}
                    onChangeText={(text) => setSearchInput({ ...searchInput, title: text })}
                />
            </VStack>
            <VStack width="30%" space={2}>
                <Box>Year</Box>
                <Input
                    placeholder="year"
                    bg="#fff"
                    width="100%"
                    borderRadius={4}
                    py={3}
                    px={2}
                    fontSize={14}
                    _web={{
                        _focus: {
                            borderColor: 'muted.300',
                        }
                    }}
                    keyboardType="number-pad"
                    value={searchInput?.year}
                    onChangeText={(text) => setSearchInput({ ...searchInput, year: text })}
                />
            </VStack>
        </HStack>
    );
}

export default SearchBar;