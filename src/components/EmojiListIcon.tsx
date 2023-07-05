import * as React from "react";
import { Box, BoxProps, ListIcon } from "@chakra-ui/react";

interface Props {
    emoji: React.ReactNode;
}

export default function EmmojiListIcon({ emoji }: Props) {
    return <ListIcon as={(props: BoxProps) => <Box {...props}>{emoji}</Box>} />;
}