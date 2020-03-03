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
      <AvatarGroup>
        <Avatar
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
          <AvatarBadge size="1.0em" bg="green.500" />
        </Avatar>
        <Avatar src="pop">
          <AvatarBadge size="1.0em" border-color="papayawhip" bg="tomato" />
        </Avatar>
      </AvatarGroup>
      <Button left-icon="close" variant-color="red" mt="3" @click="showModal = true">
        Delete Account
      </Button>
      <ClientOnly>
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
      </ClientOnly>
    </Flex>
  </Box>
</template>

<script lang="js">
import {
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
  Flex
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
    Flex
  },
  data () {
    return {
      showModal: false,
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
