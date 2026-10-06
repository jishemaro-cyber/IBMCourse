#!/bin/bash

# ==============================================================================
# Script Name: simple-interest.sh
# Author:      jishemaro
# Description: A simple interest calculator that takes user inputs for 
#              principal, interest rate, and time period via the terminal.
# ==============================================================================

# Clear the screen for a clean user interface
clear

echo "============================================="
echo "        SIMPLE INTEREST CALCULATOR           "
echo "               By jishemaro                  "
echo "============================================="
echo ""

# Function to validate if the input is a positive number (int or float)
validate_numeric_input() {
    local input="$1"
    local field_name="$2"
    
    # Check if input matches an integer or a decimal number
    if [[ ! "$input" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then
        echo "❌ Error: Invalid input for $field_name. Please enter a positive number."
        exit 1
    fi
}

# 1. Get Principal Amount
read -p "Enter the Principal amount ($): " principal
validate_numeric_input "$principal" "Principal"

# 2. Get Rate of Interest
read -p "Enter the Annual Interest Rate (%): " rate
validate_numeric_input "$rate" "Interest Rate"

# 3. Get Time Period
read -p "Enter the Time Period (in years): " time
validate_numeric_input "$time" "Time Period"

# ------------------------------------------------------------------------------
# Calculations using 'bc' (arbitrary precision calculator for terminal)
# Formula: Simple Interest = (P * R * T) / 100
# ------------------------------------------------------------------------------

# Compute Interest Amount
interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Compute Final Total Balance (Principal + Interest)
total_balance=$(echo "scale=2; $principal + $interest" | bc)

# ------------------------------------------------------------------------------
# Display Results
# ------------------------------------------------------------------------------
echo ""
echo "============================================="
echo "              CALCULATION RESULTS            "
echo "============================================="
echo "Initial Principal : \$ $principal"
echo "Interest Rate     : $rate % per annum"
echo "Time Duration     : $time year(s)"
echo "---------------------------------------------"
echo "Interest Earned   : \$ $interest"
echo "Total Balance     : \$ $total_balance"
echo "============================================="
echo ""
