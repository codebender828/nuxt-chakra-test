<template>
  <Box
    v-bind="mainStyles[colorMode]"
    d="flex"
    w="100vw"
    h="100vh"
    flex-dir="column"
    justify-content="center"
  >
    <Flex justify="center" direction="column" align="center">
      <Box mb="3">
        <IconButton :icon="colorMode === 'light' ? 'moon' : 'sun'" @click="toggleColorMode" />
        <Button left-icon="_info" variant-color="blue" @click="showToast">
          Show Toast
        </Button>
      </Box>
      <AvatarGroup
        v-if="false"
        -avatar
        name="Evan You"
        alt="Evan You"
        src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg"
      >
        <AvatarBadge size="1.0em" bg="green.500" />
        </Avatar>
        <Avatar
          name="Jonathan Bakebwa"
          alt="Jonathan Bakebwa"
          src="https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg"
        >
          <AvatarBadge size="1.0em" bg="green.500" />
        </Avatar>
        <Avatar
          name="Segun Adebayo"
          alt="Segun Adebayo"
          src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
        >
          <AvatarBadge size="1.0em" bg="red.500" />
        </Avatar>
        <Avatar src="pop">
          <AvatarBadge size="1.0em" border-color="papayawhip" bg="tomato" />
        </Avatar>
      </AvatarGroup>
      <Button left-icon="close" variant-color="red" mt="3" @click="showModal = true">
        Delete Account
      </Button>
      <Button left-icon="moon" variant-color="blue" mt="3" @click="showModal2 = true">
        Login User
      </Button>
      <Modal :is-open="showModal">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalBody>Deleting user cannot be undone</ModalBody>
          <ModalFooter>
            <Button @click="showModal = false">
              Cancel
            </Button>
            <Button ml="3" variant-color="red" @click="showModal = false">
              Delete User
            </Button>
          </ModalFooter>
          <ModalCloseButton @click="showModal = false" />
        </ModalContent>
      </Modal>
      <Modal :is-open="showModal2">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>Please logi to complete the user action</ModalBody>
          <ModalFooter>
            <Button @click="showModal2 = false">
              Cancel
            </Button>
            <Button ml="3" variant-color="blue" @click="showModal2 = false">
              Login
            </Button>
          </ModalFooter>
          <ModalCloseButton @click="showModal2 = false" />
        </ModalContent>
      </Modal>
      <AlertDialog
        :is-open="isOpen"
        :least-destructive-ref="$refs.cancelRef"
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader font-size="lg" font-weight="bold">
            Delete Customer
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref="cancelRef" @click="isOpen = false">
              Cancel
            </Button>
            <Button variant-color="red" ml="3" @click="isOpen = false">
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Tooltip label="Deletes customer permanently from list">
        <Button my="3" variant-color="red" @click="isOpen = true">
          Delete Customer
        </Button>
      </Tooltip>
      <Tooltip label="Adds new customer">
        <Button left-icon="add" my="3" variant-color="blue" @click="isOpen = true">
          Add Customer
        </Button>
      </Tooltip>
      <FormControl id="test-error" w="250px" is-invalid>
        <InputGroup>
          <InputLeftElement color="gray.300" font-size="1.2em">
            <Icon name="sun" />
          </InputLeftElement>
          <Input type="password" placeholder="Password" />
          <InputRightElement><Icon name="phone" color="gray.500" /></InputRightElement>
        </InputGroup>
        <FormErrorMessage id="url-error">
          Website is invalid
        </FormErrorMessage>
      </FormControl>
    </Flex>
  </Box>
</template>

<script lang="js">
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Input,
  FormErrorMessage,
  Box,
  Button,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Flex,
  AlertDialog, AlertDialogContent, AlertDialogBody, AlertDialogFooter, AlertDialogOverlay, AlertDialogHeader,
  Tooltip
} from 'kiwi-core'

export default {
  name: 'App',
  inject: ['$colorMode', '$toggleColorMode'],
  components: {
    Box,
    Button,
    AvatarGroup,
    Avatar,
    AvatarBadge,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
    Flex,
    AlertDialog,
    AlertDialogContent,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogOverlay,
    AlertDialogHeader,
    FormControl,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Icon,
    Input,
    FormErrorMessage,
    Tooltip
  },
  data () {
    return {
      showModal: false,
      showModal2: false,
      isOpen: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$colorMode()
    },
    theme () {
      return this.$theme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>
