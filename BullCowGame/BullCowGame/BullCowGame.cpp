// BullCowGame.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>
#include "string"

using namespace std;

int main()
{
	constexpr int WORD_LENGTH = 9;
	string Guess = "";
	cout << "Welcome to Bulls and Cows" << endl;
	cout << "Can you guess the " << WORD_LENGTH << " letter isogram i'm thinking of?\n";
	
	//get guess from player
	cout << "Enter your guess: ";
	cin >> Guess;

	cout << "Your guess was: " << Guess << endl;
    return 0;
}

