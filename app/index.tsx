import { Text, Button, H2, YStack, Sheet } from 'tamagui'
import { ToastControl } from 'app/CurrentToast'
import { useState } from 'react'

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5">
      <H2>Tamagui Animation</H2>
      <ToastControl />
      <BottomSheet />
    </YStack >
  )
}


function BottomSheet() {
  const [isVisible, setIsVisible] = useState(false)
  return <>
    <Button ai="center" onPress={() => setIsVisible(true)}>
      <Text>Show Dialog</Text>
    </Button>
    <Sheet
      animation="medium"
      open={isVisible}
      snapPoints={["80%"]}
      snapPointsMode='mixed'
      dismissOnSnapToBottom={true}
      dismissOnOverlayPress={true}
      disableDrag={false}
      forceRemoveScrollEnabled={isVisible}
      onOpenChange={setIsVisible}
    >
      <Sheet.Overlay
        animation="slow"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Frame
        backgroundColor="$gray10"
        w="100%"
        ai="center"
        jc="center"
      >
        <Text>Dialog</Text>
      </Sheet.Frame>
    </Sheet>
  </>
}