"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Declare ntc as a global variable
declare global {
  interface Window {
    ntc: {
      name: (color: string) => [string, string, boolean]
    }
  }
}

export default function ColorNamesPage() {
  const [inputColor, setInputColor] = useState("")
  const [originalColor, setOriginalColor] = useState("#000000")
  const [matchingColor, setMatchingColor] = useState("#000000")
  const [colorName, setColorName] = useState("Black")
  const [isExactMatch, setIsExactMatch] = useState(false)
  const [isValidColor, setIsValidColor] = useState(true)
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false)

  useEffect(() => {
    // Load the ntc.js library
    const script = document.createElement("script")
    script.src = "/ntc.js"
    script.onload = () => {
      setIsLibraryLoaded(true)
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleColorInput = (value: string) => {
    setInputColor(value)

    if (!isLibraryLoaded || !window.ntc) {
      return
    }

    // Clean the input - remove spaces and ensure it starts with #
    let cleanColor = value.trim()
    if (cleanColor && !cleanColor.startsWith("#")) {
      cleanColor = "#" + cleanColor
    }

    // Validate hex color format
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

    if (cleanColor && hexRegex.test(cleanColor)) {
      setIsValidColor(true)
      setOriginalColor(cleanColor)

      try {
        const result = window.ntc.name(cleanColor)
        const [matchHex, matchName, exactMatch] = result

        setMatchingColor(matchHex)
        setColorName(matchName)
        setIsExactMatch(exactMatch)
      } catch (error) {
        console.error("Error finding color name:", error)
        setIsValidColor(false)
      }
    } else if (cleanColor) {
      setIsValidColor(false)
    } else {
      setIsValidColor(true)
      // Reset to default when input is empty
      setOriginalColor("#000000")
      setMatchingColor("#000000")
      setColorName("Black")
      setIsExactMatch(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Color Name Finder</h1>
          <p className="text-lg text-gray-600 mb-2">Enter a hex color code to find its closest matching color name</p>
          <p className="text-sm text-gray-500">
            Powered by the &quot;Name that Color&quot; library by{" "}
            <a
              href="http://chir.ag/projects/ntc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Chirag Mehta
            </a>
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Hex Color</CardTitle>
            <CardDescription>Type a hex color code (e.g., #FF5733, #3498db, or just FF5733)</CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="#FF5733"
              value={inputColor}
              onChange={(e) => handleColorInput(e.target.value)}
              className={`text-lg ${!isValidColor ? "border-red-500" : ""}`}
            />
            {!isValidColor && (
              <p className="text-red-500 text-sm mt-2">Please enter a valid hex color code (e.g., #FF5733 or #333)</p>
            )}
            {!isLibraryLoaded && <p className="text-yellow-600 text-sm mt-2">Loading color library...</p>}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Original Color
                <Badge variant="outline">{originalColor.toUpperCase()}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-32 rounded-lg border-2 border-gray-300 shadow-inner"
                style={{ backgroundColor: originalColor }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Matching Color
                <Badge variant="outline">{matchingColor.toUpperCase()}</Badge>
                {isExactMatch && <Badge className="bg-green-500 hover:bg-green-600">Exact Match</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-32 rounded-lg border-2 border-gray-300 shadow-inner mb-4"
                style={{ backgroundColor: matchingColor }}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{colorName}</h3>
                {!isExactMatch && inputColor && <p className="text-sm text-gray-600 mt-1">Closest match</p>}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p className="mb-2">
              This tool uses the &quot;Name that Color&quot; JavaScript library to find the closest matching color name for any
              hex color code you enter. The library contains over 1,500 color names and uses mathematical algorithms to
              calculate color distances in both RGB and HSL color spaces.
            </p>
            <p>
              If an exact match isn&apos;t found, it will show you the closest available color name along with its hex code.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
